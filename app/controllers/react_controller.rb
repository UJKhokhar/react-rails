class ReactController < ApplicationController
  def index
    @user = User.find(6)
  end
end
