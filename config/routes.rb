Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :events, only: [:create, :show, :edit, :destroy, :update, :index]
  end

  root "static_pages#root"

end
