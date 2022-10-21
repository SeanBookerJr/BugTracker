class Manager < ApplicationRecord
    has_secure_password

    belongs_to :admin, optional: true
    
    has_many :developers
    has_many :users
    has_many :projects
    has_many :tickets, through: :users
    has_many :comments, as: :commentable

end
