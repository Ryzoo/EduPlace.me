<?php

namespace App\Http\Controllers;

use App\Http\Resources\SearchBoardResultProjection;
use App\Http\Resources\SearchTagResultProjection;
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
                "recentlyOpened" => SearchBoardResultProjection::collection($this->boardService->getRecentlyOpenedBoards($user)),
                "recommended" => SearchBoardResultProjection::collection($this->boardService->getRecommendedBoards($user)),
                "userBoards" => SearchBoardResultProjection::collection($this->boardService->getBoardsOfUser($user)),
                "searchResult" => [
                    "boards" => SearchBoardResultProjection::collection($this->searchService->findBoardsByText($additionallySearchText)),
                    "tags" => SearchTagResultProjection::collection($this->searchService->findTagsByText($additionallySearchText)),
                ]
            ]
        ]);
    }

    public function search(string $text){
        return response()->json([
            "boards" => SearchBoardResultProjection::collection($this->searchService->findBoardsByText($text)),
            "tags" => SearchTagResultProjection::collection($this->searchService->findTagsByText($text)),
        ]);
    }
}
