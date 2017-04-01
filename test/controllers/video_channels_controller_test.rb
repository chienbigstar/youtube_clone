require 'test_helper'

class VideoChannelsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get video_channels_index_url
    assert_response :success
  end

end
