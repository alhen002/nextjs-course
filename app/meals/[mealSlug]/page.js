

function Page({params}) {
    const {mealSlug} = params

    return (
        <><h1>MealDetails</h1>
        <p>{mealSlug}</p></>
    );
}

export default Page;