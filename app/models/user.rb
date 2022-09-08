class User < ApplicationRecord
    has_secure_password

    has_many :projects
    has_many :tickets
    has_many :comments

    belongs_to :admin, optional: true
    belongs_to :manager, optional: true
    belongs_to :developer, optional: true
end
