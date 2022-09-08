json.extract! ticket, :id, :title, :type, :priority, :description, :status, :user_id, :developer_id, :manager_id, :admin_id, :project_id, :created_at, :updated_at
json.url ticket_url(ticket, format: :json)
