class Ticket < ApplicationRecord
    has_many :comments
    
    belongs_to :user, optional: true
    belongs_to :project, optional: true
end
