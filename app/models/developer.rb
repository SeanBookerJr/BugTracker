class Developer < ApplicationRecord
    has_secure_password

    belongs_to :manager, optional: true

    has_many :users
    has_many :projects, through: :manager
    has_many :tickets, through: :users
    has_many :comments, as: :commentable

end
