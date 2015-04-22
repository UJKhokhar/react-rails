require 'securerandom'
class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :confirmable

  protected

  def generate_auth_token
    auth_token = nil
    begin
      auth_token = SecureRandom.uuid.gsub(/\-/, '')
    end while self.class.exists?(auth_token: auth_token)
    auth_token
  end

  def after_confirmation
    # TODO: Need to check for failures. Possibly create set auth token method in user profile. 
    token = generate_auth_token
    response = RestClient.post "http://localhost:3001/api/users", {:user => {:auth_token => token}}
    if response.code == 200
      self.update_attributes(auth_token: token)
    end
  end
end
