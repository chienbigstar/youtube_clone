Rails.application.routes.draw do
  root 'home#index'
  resources :list_youtubes
  resources :ajaxs
  resources :video_channels
  resources :video_onlys
end
