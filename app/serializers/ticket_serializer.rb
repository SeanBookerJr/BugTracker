class TicketSerializer < ActiveModel::Serializer
  attributes :id, :title, :type_of, :priority, :description, :status, :user_id, :project_id, :created_at, :updated_at, :developer, :user
  
  has_many :comments
  belongs_to :user
end
