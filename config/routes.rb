Rails.application.routes.draw do
  root to: "static_pages#root"
  post '/' => "static_pages#root", as: :search
  get '/favorites' => "static_pages#favorites"

end
