class Event < ActiveRecord::Base

  validates(
  :name,
  :start_date,
  :recurrences,
  :delivery_date,
  :calculated_date,
  presence: true
  )
end
