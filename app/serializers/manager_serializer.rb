class ManagerSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :first_name, :last_name, :email, :account_type, :admin_id, :developers

    has_many :developers
    has_many :users
    has_many :projects
    has_many :tickets, through: :users
    has_many :comments, through: :users

    belongs_to :admin
end
