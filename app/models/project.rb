class Project < ApplicationRecord
    has_many :tickets
    has_many :comments, through: :tickets

    belongs_to :user, optional: true
    belongs_to :manager, optional: true
end
