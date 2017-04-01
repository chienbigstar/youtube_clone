require 'net/http'

class AjaxsController < ApplicationController
  def index
    uri = URI(params[:link])
    @result = Net::HTTP.get_response(uri)
    # respond_to do |format|
    #   format.html
    #   format.json{render json: {content: @result.body.html_safe}}
    # end
  end
end
