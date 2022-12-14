class Ticket < ApplicationRecord
    belongs_to :user, optional: true
    belongs_to :project, optional: true
    belongs_to :admin, optional: true
    belongs_to :manager, optional: true
    belongs_to :developer, optional: true

    has_many :comments, dependent: :destroy

    has_one :manager, :through => :user
    
    has_noticed_notifications
    
     has_many :notifications, through: :user
     has_many :notifications, through: :developer

end
