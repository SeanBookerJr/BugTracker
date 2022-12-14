Rails.application.routes.draw do
  resources :admins
  resources :managers
  resources :developers
  resources :users
  resources :projects
  resources :tickets
  resources :comments
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  get '/me', to: 'sessions#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  
  get '/project/alltickets/:id', to: 'projects#get_tickets'

  get '/user/allprojects/:id', to: 'users#get_projects'

  get '/ticket/details/:id', to: 'tickets#details'

  get '/ticket/comments/:id', to: 'tickets#ticket_comments'

  get '/user/notifications/:id', to: 'users#notifications'

  get '/developer/notifications/:id', to: 'developers#notifications'

  get '/manager/notifications/:id', to: 'managers#notifications'


  # Defines the root path route ("/")
  # root "articles#index"
end
