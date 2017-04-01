require 'test_helper'

class AjaxsControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get ajaxs_show_url
    assert_response :success
  end

end
