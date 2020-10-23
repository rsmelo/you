from ....twitter.twitter_user import TwitterUser
from ....genius.match import Match

from .. import utils

user = TwitterUser("MontellFish")
matcher = Match()

def test_basic_match():
    query = ""
    top_words = user.get_top_words()
    word_limit = 1

    for index, word_freq in enumerate(top_words):
        query += word_freq[0] + " "

        if index >= word_limit - 1:
            break

    print(query)
    print(matcher.search_songs(query))


def test_utils():
    songs = utils.match_with_top_words("MontellFish")

    print(songs)
