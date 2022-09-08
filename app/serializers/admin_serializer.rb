class AdminSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :first_name, :last_name, :email, :account_type

  has_many :managers
  has_many :developers, through: :managers
  has_many :users
  has_many :projects, through: :users
  has_many :tickets, through: :users
  has_many :comments, through: :users
end
