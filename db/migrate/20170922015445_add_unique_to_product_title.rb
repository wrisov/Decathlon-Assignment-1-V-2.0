class AddUniqueToProductTitle < ActiveRecord::Migration[5.1]
  def change
    add_index :products, :title, unique: true
  end
end
