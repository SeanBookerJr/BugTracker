json.extract! comment, :id, :message, :user_id, :developer_id, :manager_id, :admin_id, :project_id, :ticket_id, :created_at, :updated_at
json.url comment_url(comment, format: :json)
