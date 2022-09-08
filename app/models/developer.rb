class Developer < ApplicationRecord
    has_secure_password

    has_many :users
    has_many :projects, through: :managers
    has_many :tickets, through: :users
    has_many :comments, as: :commentable

    belongs_to :manager, optional: true
end
