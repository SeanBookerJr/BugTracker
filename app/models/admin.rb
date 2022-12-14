class Admin < ApplicationRecord
    has_secure_password

    has_many :managers
    has_many :developers, through: :managers
    has_many :users
    has_many :projects, through: :managers
    has_many :tickets, through: :users
    has_many :comments, as: :commentable

    # has_noticed_notifications model_name: 'Notification'
    # has_many :notifications, as: :recipient, dependent: :destroy

end
