class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :user_id, :manager_id, :created_at, :updated_at, :user

  has_many :tickets
  has_one :manager
end
