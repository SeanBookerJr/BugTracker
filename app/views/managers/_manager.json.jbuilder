json.extract! manager, :id, :username, :first_name, :last_name, :email, :admin_id, :created_at, :updated_at
json.url manager_url(manager, format: :json)
