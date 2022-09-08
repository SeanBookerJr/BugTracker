class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :user_id, :manager_id

  has_many :tickets
  has_one :manager
end
