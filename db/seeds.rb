require 'faker'

puts "now seeding"

ADMIN_ITER = 10
MANAGER_ITER = 20
DEVELOPER_ITER = 50
USER_ITER = 100
PROJECT_ITER = 600
TICKET_ITER = 1200
COMMENT_ITER = 2400


ADMIN_ITER.times do

    Admin.create!(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, username: Faker::App.name, password_digest: Faker::Alphanumeric.alphanumeric(number: 10), email: Faker::Internet.email, account_type: "Admin")
end

MANAGER_ITER.times do
    Manager.create!(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, username: Faker::App.name, password_digest: Faker::Alphanumeric.alphanumeric(number: 10), email: Faker::Internet.email, admin_id: Faker::Number.within(range: 1..10), account_type: "Manager")
end

DEVELOPER_ITER.times do
    Developer.create!(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, username: Faker::App.name, password_digest: Faker::Alphanumeric.alphanumeric(number: 10), email: Faker::Internet.email, manager_id: Faker::Number.within(range: 1..20), account_type: "Developer")
end
USER_ITER.times do
    User.create!(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, username:Faker::App.name, password_digest: Faker::Alphanumeric.alphanumeric(number: 10), email: Faker::Internet.email, admin_id: Faker::Number.within(range: 1..10), manager_id: Faker::Number.within(range: 1..20), developer_id: Faker::Number.within(range: 1..50), account_type: "Customer")
end

PROJECT_ITER.times do
    Project.create!(title: Faker::App.name, description: Faker::Lorem.sentences(number: 1), user_id: Faker::Number.within(range: 1..100), manager_id: Faker::Number.within(range: 1..20))
end

TICKET_ITER.times do
    Ticket.create!(title: Faker::App.name, type_of: ["performance", "security", "functional", "usability", "syntax", "compatability"].to_a.sample, priority: ["low", "medium", "high"].to_a.sample, description: Faker::Lorem.sentences(number: 2), status: ["open", "resolved", "in-progress"].to_a.sample, user_id: Faker::Number.within(range: 1..100), project_id: Faker::Number.within(range: 1..600), developer_id: Faker::Number.within(range: 1..50))
end

COMMENT_ITER.times do
    Comment.create!(message: Faker::Lorem.sentences(number: 1), ticket_id: Faker::Number.within(range: 1..1200), commentable_id: Faker::Number.within(range: 1..100), commentable_type: ["Admin", "Manager", "Developer", "User"].to_a.sample)
end

puts "seeding finished"
