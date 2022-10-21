class Project < ApplicationRecord
    belongs_to :user, optional: true
    belongs_to :manager, optional: true

    has_many :tickets, dependent: :destroy
    has_many :comments, through: :tickets


end
