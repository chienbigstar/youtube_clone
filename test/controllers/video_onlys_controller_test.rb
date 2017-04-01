require 'test_helper'

class VideoOnlysControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get video_onlys_index_url
    assert_response :success
  end

end
