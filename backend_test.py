import requests
import sys
from datetime import datetime
import json

class LMNInfraAPITester:
    def __init__(self, base_url="https://buildwith-lmn.preview.emergentagent.com"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0
        self.failed_tests = []

    def run_test(self, name, method, endpoint, expected_status, data=None, params=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"   URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, params=params, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    response_data = response.json()
                    print(f"   Response: {json.dumps(response_data, indent=2)[:200]}...")
                except:
                    print(f"   Response: {response.text[:100]}...")
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                print(f"   Response: {response.text[:200]}...")
                self.failed_tests.append({
                    'name': name,
                    'expected': expected_status,
                    'actual': response.status_code,
                    'response': response.text[:200]
                })

            return success, response.json() if success and response.text else {}

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            self.failed_tests.append({
                'name': name,
                'error': str(e)
            })
            return False, {}

    def test_root_endpoint(self):
        """Test root API endpoint"""
        return self.run_test("Root API", "GET", "api/", 200)

    def test_health_check(self):
        """Test health check endpoint"""
        return self.run_test("Health Check", "GET", "api/health", 200)

    def test_materials_catalog(self):
        """Test materials catalog endpoint"""
        return self.run_test("Materials Catalog", "GET", "api/materials", 200)

    def test_properties_catalog(self):
        """Test properties catalog endpoint"""
        return self.run_test("Properties Catalog", "GET", "api/properties", 200)

    def test_delivery_zones(self):
        """Test delivery zones endpoint"""
        return self.run_test("Delivery Zones", "GET", "api/delivery-zones", 200)

    def test_construction_packages(self):
        """Test construction packages endpoint"""
        return self.run_test("Construction Packages", "GET", "api/packages", 200)

    def test_cost_estimator(self):
        """Test cost estimator endpoint"""
        test_cases = [
            {"sqft": 1500, "package": "basic", "expected_total": 2775000},
            {"sqft": 2000, "package": "classic", "expected_total": 3900000},
            {"sqft": 1000, "package": "premium", "expected_total": 2150000}
        ]
        
        all_passed = True
        for case in test_cases:
            success, response = self.run_test(
                f"Cost Estimate - {case['package']} {case['sqft']} sqft",
                "POST",
                f"api/estimate?sqft={case['sqft']}&package={case['package']}",
                200
            )
            if success and response.get('total_cost') != case['expected_total']:
                print(f"❌ Cost calculation error - Expected {case['expected_total']}, got {response.get('total_cost')}")
                all_passed = False
        
        return all_passed

    def test_quote_request(self):
        """Test quote request submission"""
        quote_data = {
            "name": f"Test User {datetime.now().strftime('%H%M%S')}",
            "phone": "9876543210",
            "email": "test@example.com",
            "material_name": "UltraTech Cement",
            "quantity": "100 bags",
            "service_type": "materials",
            "message": "Test quote request"
        }
        
        success, response = self.run_test(
            "Quote Request Submission",
            "POST",
            "api/quotes",
            200,
            data=quote_data
        )
        
        if success:
            # Test retrieving quotes
            self.run_test("Get Quote Requests", "GET", "api/quotes", 200)
        
        return success

    def test_contact_inquiry(self):
        """Test contact inquiry submission"""
        contact_data = {
            "name": f"Test Contact {datetime.now().strftime('%H%M%S')}",
            "phone": "9876543210",
            "email": "contact@example.com",
            "service": "construction",
            "message": "Test contact inquiry"
        }
        
        success, response = self.run_test(
            "Contact Inquiry Submission",
            "POST",
            "api/contact",
            200,
            data=contact_data
        )
        
        if success:
            # Test retrieving contact inquiries
            self.run_test("Get Contact Inquiries", "GET", "api/contact", 200)
        
        return success

    def test_invalid_endpoints(self):
        """Test invalid endpoints return proper errors"""
        invalid_tests = [
            ("Invalid Cost Package", "POST", "api/estimate?sqft=1500&package=invalid", 400),
            ("Invalid Sqft Range", "POST", "api/estimate?sqft=50&package=basic", 400),
            ("Non-existent Endpoint", "GET", "api/nonexistent", 404)
        ]
        
        all_passed = True
        for name, method, endpoint, expected_status in invalid_tests:
            success, _ = self.run_test(name, method, endpoint, expected_status)
            if not success:
                all_passed = False
        
        return all_passed

def main():
    print("🚀 Starting LMN Infra API Testing...")
    print("=" * 60)
    
    tester = LMNInfraAPITester()
    
    # Run all tests
    test_methods = [
        tester.test_root_endpoint,
        tester.test_health_check,
        tester.test_materials_catalog,
        tester.test_properties_catalog,
        tester.test_delivery_zones,
        tester.test_construction_packages,
        tester.test_cost_estimator,
        tester.test_quote_request,
        tester.test_contact_inquiry,
        tester.test_invalid_endpoints
    ]
    
    for test_method in test_methods:
        try:
            test_method()
        except Exception as e:
            print(f"❌ Test method {test_method.__name__} failed with error: {str(e)}")
            tester.failed_tests.append({
                'name': test_method.__name__,
                'error': str(e)
            })
    
    # Print results
    print("\n" + "=" * 60)
    print(f"📊 Test Results: {tester.tests_passed}/{tester.tests_run} tests passed")
    
    if tester.failed_tests:
        print("\n❌ Failed Tests:")
        for failed in tester.failed_tests:
            error_msg = failed.get('error', f"Expected {failed.get('expected')}, got {failed.get('actual')}")
            print(f"   - {failed['name']}: {error_msg}")
    
    success_rate = (tester.tests_passed / tester.tests_run * 100) if tester.tests_run > 0 else 0
    print(f"\n🎯 Success Rate: {success_rate:.1f}%")
    
    return 0 if tester.tests_passed == tester.tests_run else 1

if __name__ == "__main__":
    sys.exit(main())