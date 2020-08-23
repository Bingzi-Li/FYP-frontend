from simulator import Env, Map, Agent
from threading import Thread
import concurrent.futures


class MobileSimulation:
    def __init__(self, n):
        env = Env.Env()
        map = Map.Map()
        with concurrent.futures.ThreadPoolExecutor(max_workers=n) as executor:
            executor.submit(Agent.Agent(env))


if __name__ == '__main__':
    MobileSimulation(100)
