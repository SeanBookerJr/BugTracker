class TicketSerializer < ActiveModel::Serializer
  attributes :id, :title, :type_of, :priority, :description, :status, :user_id, :project_id
  
  has_many :comments
end
