class Api::NflStatsController < ApplicationController 

  def index 
    render json: NflStat.all 
  end

end
