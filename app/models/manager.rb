class Manager < ApplicationRecord
    has_secure_password
    
    has_many :developers
    has_many :users
    has_many :projects
    has_many :tickets, through: :users
    has_many :comments, as: :commentable

    belongs_to :admin, optional: true
end
