<?php

namespace App\Http\Controllers;

use App\Services\BoardService;
use App\Services\SearchService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SearchController extends Controller
{
    private BoardService $boardService;
    private SearchService $searchService;

    public function __construct(BoardService $boardService, SearchService $searchService){

        $this->boardService = $boardService;
        $this->searchService = $searchService;
    }

    public function getSearchPage(Request $request)
    {
        $user = Auth::user();
        $additionallySearchText = $request->get('text', '');

        return view('pages.search', [
            "viewData" => [
                "recentlyOpened" => $this->boardService->getRecentlyOpenedBoards($user),
                "recommended" => $this->boardService->getRecommendedBoards($user),
                "userBoards" => $this->boardService->getBoardsOfUser($user),
                "searchResult" => [
                    "boards" => $this->searchService->findBoardsByText($additionallySearchText),
                    "tags" => $this->searchService->findTagsByText($additionallySearchText),
                ]
            ]
        ]);
    }

    public function search(string $text){
        return response()->json([
            "boards" => $this->searchService->findBoardsByText($text),
            "tags" => $this->searchService->findTagsByText($text),
        ]);
    }
}
