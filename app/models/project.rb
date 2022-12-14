class Project < ApplicationRecord
    belongs_to :user, optional: true
    belongs_to :manager, optional: true

    has_many :tickets, dependent: :destroy
    has_many :comments, through: :tickets

    #  has_noticed_notifications model_name: 'Notification'
    #  has_many :notifications, through: :user, dependent: :destroy

end
