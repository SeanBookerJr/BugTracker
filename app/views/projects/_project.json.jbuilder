json.extract! project, :id, :title, :description, :user_id, :developer_id, :manager_id, :admin_id, :created_at, :updated_at
json.url project_url(project, format: :json)
