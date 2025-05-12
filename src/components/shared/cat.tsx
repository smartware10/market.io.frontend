import { getAllCategories } from "@/lib/api/categories";

export default async function CategoriesList() {
  const categories = await getAllCategories();

  return (
    <div>
      <h2>Категории</h2>
      <ul>
        {categories?.length ? (
          categories.map((cat) => <li key={cat.id}>{cat.name}</li>)
        ) : (
          <p>Нет данных или ошибка загрузки</p>
        )}
      </ul>
    </div>
  );
}
