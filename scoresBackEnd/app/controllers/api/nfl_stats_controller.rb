class Api::NflStatsController < ApplicationController 

  def index 
    
    render json: {msg: "OK"}
  end

end
