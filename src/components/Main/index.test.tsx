// JEST
import { render, screen } from '@testing-library/react'
// Components
import Main from '.'

describe('<Main/>', () => {
  it('Should render a heading', () => {
    const { container } = render(<Main />)
    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
