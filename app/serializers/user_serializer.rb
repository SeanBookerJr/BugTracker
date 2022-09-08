class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :first_name, :last_name, :email, :account_type, :developer_id, :manager_id, :admin_id

  has_many :projects
  has_many :tickets
  has_many :comments
end
