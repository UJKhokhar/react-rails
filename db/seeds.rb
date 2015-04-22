require 'faker'

# Create Users
5.times do
  user = User.new(
    name: Faker::Name.name,
    email: Faker::Internet.email,
    password: Faker::Lorem.characters(10)
  )
  user.skip_confirmation!
  user.save!
end

# Special user
umar = User.new(
  name: 'Umar Khokhar',
  email: 'ujkhokhar@gmail.com',
  password: 'helloworld',
  auth_token: 'umartoken'
)
umar.skip_confirmation!
umar.save!

users = User.all
puts "6 users created"

puts "Seed finished"