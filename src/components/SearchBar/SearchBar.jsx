import { Form, Input, Button } from "./SearchBar.styled";

export default function SearchBar({onSubmit}) {
    const handleSubmit = (e) => {
        e.preventDefault();
        const value = e.target.elements.name.value.trim()
        console.log(value)
        value !== "" && onSubmit(value)
        e.target.reset()
    }

  return (
    <Form onSubmit={handleSubmit}>
       <Input
       name="name"
        type="text"
        aria-label="movie_search"
      />
      <Button type='submit' >Search</Button>
    </Form>
  )
}
