import { pages } from "@/store/pages"

let mockCommit = jest.fn()

describe("pages vuex module", () => {

  test("initial state is set correctly", () => {

    const initalState = {
      page: 1,
      totalPages: 0
    }
    
    expect(pages.state).toEqual(initalState)
  })

  test("getPage getter works correctly", () => {

    expect(pages.getters.getPage(pages.state)).toEqual(pages.state.page)
  })
  
  test("getTotalPages getter works correctly", () => {

    expect(pages.getters.getTotalPages(pages.state)).toEqual(pages.state.totalPages)
  })

  test("nextPage action works correctly", () => {

    pages.actions.nextPage({ commit: mockCommit })

    expect(mockCommit).toBeCalledWith("setNextPage")
  })
  
  test("prevPage action works correctly", () => {

    pages.actions.prevPage({ commit: mockCommit })

    expect(mockCommit).toBeCalledWith("setPrevPage")
  })

  test("initialPage action works correctly", () => {

    pages.actions.initialPage({ commit: mockCommit })

    expect(mockCommit).toBeCalledWith("setInitialPage")
  })

  test("lastPage action works correctly", () => {

    pages.actions.lastPage({ commit: mockCommit })

    expect(mockCommit).toBeCalledWith("setLastPage")
  })

  test("totalPages action works correctly", () => {

    const totalPokemon = 150

    pages.actions.totalPages({ commit: mockCommit }, totalPokemon)

    expect(mockCommit).toBeCalledWith("setTotalPages", totalPokemon)
  })

  test("setNextPage mutation works correctly", () => {

    pages.mutations.setNextPage(pages.state)

    expect(pages.state.page).toEqual(2)
  })
  
  test("setNextPrevPage mutation works correctly", () => {

    pages.mutations.setPrevPage(pages.state)

    expect(pages.state.page).toEqual(1)
  })

  test("setInitialPage mutation works correctly", () => {

    pages.mutations.setNextPage(pages.state)
    pages.mutations.setNextPage(pages.state)
    pages.mutations.setNextPage(pages.state)
    pages.mutations.setNextPage(pages.state)
    pages.mutations.setNextPage(pages.state)
    
    pages.mutations.setInitialPage(pages.state)

    expect(pages.state.page).toEqual(1)
  })

  test("setTotalPages mutation works correctly", () => {

    const totalPokemon = 20

    pages.mutations.setTotalPages(pages.state, totalPokemon)

    expect(pages.state.totalPages).toEqual(4)
  })

  test("setLastPage mutation works correctly", () => {

    pages.mutations.setLastPage(pages.state)

    expect(pages.state.page).toEqual(4)
  })
})
