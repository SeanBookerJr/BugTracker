class Comment < ApplicationRecord
    belongs_to :commentable, polymorphic: true, optional: true
    belongs_to :user, optional: true
    belongs_to :developer, optional: true
    belongs_to :manager, optional: true
    belongs_to :admin, optional: true

end
