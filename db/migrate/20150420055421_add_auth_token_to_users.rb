class AddAuthTokenToUsers < ActiveRecord::Migration
  def up
    add_column :users, :auth_token, :string, default: ''
    add_index :users, :auth_token
  end

  def down
    remove_column :users, :auth_token, :string
    remove_column :users, :auth_token
  end
end
