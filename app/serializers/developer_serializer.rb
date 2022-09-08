class DeveloperSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :first_name, :last_name, :email, :account_type, :manager_id

    has_many :users
    has_many :projects, through: :users
    has_many :tickets, through: :users
    has_many :comments, through: :users

    belongs_to :manager
end
