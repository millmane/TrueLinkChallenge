json.array! (@events) do |event|
  json.extract! event,
   :id,
   :name,
   :start_date,
   :recurrences,
   :delivery_date,
   :calculated_date
 end
